export default {
  emoji: function(text) {
    return text
      .replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,
        function (m) {
          return m.replace(/:/g, "__colon__");
        }
      )
      .replace(/:(\w+?):/ig,  function (m, $1) {
        return "<img class='emoji' src='https://assets-cdn.github.com/images/icons/emoji/" + $1 + ".png' alt='" + $1 + "' />";
      })
      .replace(/__colon__/g, ":");
  }
}