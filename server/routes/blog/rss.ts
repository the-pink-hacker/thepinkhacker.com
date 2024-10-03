import RSS from "rss";
import { serverQueryContent } from "#content/server";

export default defineCachedEventHandler(async (event) => {
    const posts = await serverQueryContent(event, "/blog/post")
        .only(["title", "description", "date", "_path", "tags"])
        .where({ _partial: false })
        .find();

    const feed = new RSS({
        title: "Pink's Blog",
        description: "My personal blog about whatever projects I'm working on at the moment.",
        site_url: "https://thepinkhacker.com/blog",
        feed_url: "https://thepinkhacker.com/blog/rss",
        categories: [
            "blog"
        ],
    });

    for (const { description, title, date, _path, tags } of posts) {
        feed.item({
            title: title ?? "Untitled Post",
            url: `https://thepinkhacker.com${_path}`,
            date,
            description,
            categories: tags,
        });
    }

    const output = feed.xml({ indent: true });

    event.node.res.setHeader("content-type", "text/xml");
    event.node.res.end(output);
});
