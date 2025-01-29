// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");

  eleventyConfig.addShortcode(
    "blogs",
    (title, href, src, alt) => {
      return `<a href="${href}"><img alt="${alt}" src="${src}"/><div>${title}</div></a>`;
    }
  );
}