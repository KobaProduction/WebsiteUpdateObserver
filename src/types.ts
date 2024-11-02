export type SiteConfig = {
    readonly name: string,
    readonly url: string,
    readonly proxy: string | null,
    readonly headers: HeadersInit
}

export type SitesConfig = {
    readonly websites: Array<SiteConfig>
}