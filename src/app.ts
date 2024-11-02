import {env} from "./configs/env";
import {readSitesConfig} from "./configs/configs";
import {SiteLoader} from "./site-loader";

const configs = readSitesConfig()

// console.log(configs.websites)

let sites: Array<SiteLoader> = []

for (const site of configs.websites) {
    const siteLoader = new SiteLoader(site);
    siteLoader.load().then()
    sites.push(siteLoader)
}