// 使用 Cloudflare Workers 代理
const WORKERS_URL = 'https://github-api-ai.lz-t.top/'

export interface AIInputData {
  login: string
  stars: number
  lang: string
  topRepo: string
}

export type AIType = 'analysis' | 'critique' | 'tags'

/**
 * 根据类型生成 AI 提示词 (Prompt)
 */
const getPrompt = (type: AIType, data: AIInputData): string => {
  if (type === 'analysis') {
    return `你是技术趋势分析专家。基于以下数据：

- 用户身份：${data.login}
- 技术影响力：${data.stars}
- 核心开发语言：${data.lang}
- 旗舰项目：${data.topRepo}

请直接生成一份**2025年度技术总结报告**。要求如下：

1.  用犀利、专业的语言直接剖析其技术栈选择、工程实践特点与项目贡献，避免使用“用户”、“该用户”等客套前缀。
2.  重点突出其在过去一年表现出的技术偏好、代码质量与架构决策特点。
3.  结尾用一句话预测其在2026年最可能爆发或转型的技术方向。
4.  整篇分析需高度凝练，控制在300字以内。

例如：
> 主力栈${data.lang}，擅长高Star项目架构。代码追求极致简洁，倾向工具链与开发者体验优化。2026年可能向AI工程化或边缘计算领域纵深切入。`
  }

  if (type === 'critique') {
    return `你是 GitHub 灵魂分析官。基于数据：用户名${data.login}, Star总计${data.stars}, 主修语言${data.lang}, 代表作${data.topRepo}。
    请生成一个让他破防的梗，要求极其毒舌但精准（约200字）。
    避免使用“用户”、“该用户”等客套前缀。
    回复内容直接展示，不需要标题。`
  }

  // 默认返回 tags 类型的 prompt
  return `你是 GitHub 标签生成器。基于数据：用户名${data.login}, Star总计${data.stars}, 主修语言${data.lang}, 代表作${data.topRepo}。
    分析其开源贡献与技术特点，生成5-10个总结性、富有洞察力的中文身份标签。标签需幽默风趣、生动贴切，反映其技术栈、项目特点或开发风格。请直接输出以逗号分隔的标签，无需其他说明。

    例如可能的输出风格：
    代码艺术家，全栈乐高玩家，深夜提交侠，Python魔术师，开源传教士，Bug狩猎者；
    限制：
    用逗号分隔，不能重复。
    回复内容直接展示标签，不需要标题。`
}

/**
 * 调用 Mimo AI 接口获取分析内容
 */
export const callMimoAI = async (type: AIType, data: AIInputData): Promise<string> => {
  const prompt = getPrompt(type, data)

  try {
    // 使用 Workers 代理
    const response = await fetch(WORKERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8
      })
    })
    const resData = await response.json()
    return resData.choices[0].message.content || ''
  } catch (e) {
    console.error('AI调用失败:', e)
    return type === 'tags' ? "技术宅,代码人,探索者" : "AI 脑机连接异常，但在代码维度里，你已经是不可忽视的奇点。"
  }
}
