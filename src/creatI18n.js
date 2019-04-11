const i18n = {
  'zh-cn': {
    init: "登录以初始化一个评论",
    counts: "条评论",
    login: "登录",
    logout: "注销",
    leave: "发表评论",
    styling: "支持使用Markdown进行样式设置",
    write: "编写",
    preview: "预览",
    noPreview: "无预览内容",
    submit: "提交",
    reply: "回复",
    loadMore: "加载更多",
    loading: "加载中...",
    loadEnd: "加载完毕",
    published: "发表于",
    loginAgainForToken: "无法获取token，请重新登录!",
    loginAgainForUser: "无法获取用户信息，请重新登录!",
    loginAgainForRedirect: "无法获取重定向地址，请重新登录!",
    getIssueFail: "获取issue失败，是否初始化一个issue?",
    permissionFail: "你无权限初始化此issue，请联系管理员！",
    initFail: "初始化issue失败，请重试！",
    commentEmpty: "评论不能为空！",
    commentFail: "评论失败，请重试！",
    commentSuccess: "评论成功！",
    getCommentFail: "获取评论列表失败，请重试！",
  },
  en: {
    init: "Login then initialize a issue",
    counts: "comments",
    login: "Login",
    logout: "Logout",
    leave: "Leave a comment",
    styling: "Styling with Markdown is supported",
    write: "Write",
    preview: "Preview",
    noPreview: "Nothing to preview",
    submit: "Submit",
    reply: "Reply",
    loadMore: "Load More",
    loading: "loading...",
    loadEnd: "Load completed",
    published: "Published on",
    loginAgainForToken: "Can not get token, Please login again!",
    loginAgainForUser: "Can not get user info, Please login again!",
    loginAgainForRedirect: "Can not get redirect url, Please login again!",
    getIssueFail: "Failed to get issue, Do you want to initialize an new issue?",
    permissionFail: "You do not have permission to initialize this issue, please contact the administrator",
    initFail: "Initialization of the issue failed, please try again!",
    commentEmpty: "Comment content cannot be empty!",
    commentFail: "Comment failed, please try again!",
    commentSuccess: "Comment successfully!",
    getCommentFail: "Failed to get comment list, please try again!",
  }
};

export default function (lang) {
  const langObj = i18n[lang] || i18n["zh-cn"];
  return function (key) {
    return langObj[key] || `Unmath key: ${key}`;
  };
}