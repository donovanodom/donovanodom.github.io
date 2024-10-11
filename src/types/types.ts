export type WriteUp = {
  guid: string,
  title: string,
  link: string,
  content: string,
  author: string,
  pubDate: string,
  categories: string[],
}

export type Project = {
  id: string,
  title: string,
  description: string,
  image: string,
  github_link: string,
  site: string
}

export type Algo = {
  id: string,
  title: string,
  content: string,
  code: string,
  tags: string[]
}

export type AlgoTag = {
  name: string,
  count: number,
  active: boolean,
}