import {SiteConfig} from "./types";
import path from "node:path";
import {env} from "./configs/env";
import fs from "node:fs";
import {writeFile, readFile} from "node:fs/promises";
import {parse} from 'node-html-parser';

export class SiteLoader {

    private readonly config: SiteConfig;
    private readonly url: URL;

    constructor(config: SiteConfig) {
        this.config = config;
        this.url = new URL(config.url);
    }

    private async loadFromFile() {

        return
    }

    private async loadFromOrigin() {
        fetch(this.url, {method: "GET", headers: this.config.headers}).then(async response => {
            console.log(response.status)
            console.log(response.body)
            const text = await response.text()
            console.log(text)
        }).catch(error => {
            console.log(error)
        })
    }

    getLinks(htmlFile: string) : Array<string> {
        let links: Array<string> = [];
        const root = parse(htmlFile)
        const scriptsLinks = Array.from(root.querySelectorAll("script")).map(script => {
            let href = script.getAttribute("src");
            if (!href) return;
            if (href.startsWith("./")) href = href.slice(1);
            if (href.startsWith("/")) href = this.url.origin + href;
            return new URL(href);
        }).filter(src => src);
        console.log(scriptsLinks)
        return links;
    }

    async load(): Promise<void> {

        const sitePath = path.join(env.RESOURCES_DIR, env.SITES_DATABASE_DIR, this.url.hostname);
        const docPath = path.join(sitePath, "doc.html")

        const file = await readFile(docPath, "utf8");

        // document.body = new HTMLBodyElement()
        for (const link of this.getLinks(file)) {
            console.log(link);
        }

    }
}