import {HELPER_ARTICLES} from "../HELPER_ARTICLES";
export const SECTION2 = {
  "before": {
    title: "编码之前",
    articlesView: [
      {
        title: "编码之前",
        articles: HELPER_ARTICLES["zh-cn"].before
      }
    ],
    skills: ["front"],
    growthView: [
      {
        title: "编码之前",
        sections: [
          {
            title: "书单",
            info: {type: "book", domain: "before"}
          }
        ]
      }
    ],
    todoView: [{
      title: "编码之前",
      info: {domain: "before"}
    }]
  },
  "test": {
    title: "测试",
    articlesView: [
      {
        title: "测试",
        articles: HELPER_ARTICLES["zh-cn"].test
      }
    ],
    skills: ["front"],
    growthView: [
      {
        title: "编码之前",
        sections: [
          {
            title: "书单",
            info: {type: "book", domain: "test"}
          }
        ]
      }
    ],
    todoView: [{
      title: "测试",
      info: {domain: "test"}
    }]
  },
  "coding": {
    title: "编码",
    articlesView: [
      {
        title: "编码",
        articles: HELPER_ARTICLES["zh-cn"].coding
      }
    ],
    skills: ["front"],
    growthView: [
      {
        title: "编码",
        sections: [
          {
            title: "书单",
            info: {type: "book", domain: "coding"}
          }
        ]
      }
    ]
  }
};
