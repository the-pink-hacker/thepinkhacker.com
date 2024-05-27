import { serverQueryContent } from "#content/server";
import { asSitemapUrl, defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async (e) =>
    (await serverQueryContent(e)
        .where({ _partial: false })
        .only(["_path", "date"])
        .find()
    )
        .map((c) => {
            return asSitemapUrl({
                loc: c._path,
                lastmod: c.date,
            })
        })
);
