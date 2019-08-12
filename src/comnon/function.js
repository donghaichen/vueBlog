export default {
  emoji: function(text) {
    return text
      .replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,
        function (m) {
          return m.replace(/:/g, "__colon__").replace(/language-/g, "");
        }
      )
      .replace(/:(\w+?):/ig,  function (m, $1) {
        return "<img class='emoji' src='https://github.githubassets.com/images/" + $1 + ".png' alt='" + $1 + "' />";
      })
      .replace(/__colon__/g, ":");
  }
}