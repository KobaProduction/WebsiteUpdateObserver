import {env} from "./env";
import * as fs from "node:fs";
import path from'node:path';
import {SitesConfig} from "../types";

export function readSitesConfig(): SitesConfig {
    const filePath = path.join(env.RESOURCES_DIR, env.SITES_CONFIG_FILE)
    const file = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(file)
}