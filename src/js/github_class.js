const GHURL = 'https://api.github.com/users/Gregory-SF/repos';

class GithubRepo {
    constructor({
        id, node_id, name, full_name, isPrivate, owner, html_url, description, fork, url, forks_url, keys_url, collaborators_url, teams_url, hooks_url, issue_events_url, events_url, assignees_url, branches_url, tags_url, blobs_url, git_tags_url, git_refs_url,trees_url, statuses_url, languages_url, stargazers_url, contributors_url,  subscribers_url, subscription_url, commits_url, git_commits_url, comments_url, issue_comment_url, contents_url, compare_url, merges_url, archive_url, downloads_url, issues_url, pulls_url, milestones_url, notifications_url, labels_url, releases_url, deployments_url, created_at, updated_at, pushed_at, git_url, ssh_url, clone_url, svn_url,homepage, size, stargazers_count, watchers_count, language, has_issues, has_projects,has_downloads, has_wiki, has_pages, has_discussions, forks_count, mirror_url, archived, disabled, open_issues_count, license, allow_forking, is_template, web_commit_signoff_required, topics, visibility, forks, open_issues, watchers, default_branch
    }) {
        this.id = id;
        this.node_id = node_id;
        this.name = name;
        this.full_name = full_name;
        this.private = isPrivate;
        this.owner = {owner};
        this.html_url = html_url;
        this.description = description;
        this.fork = fork;
        this.url = url;
        this.forks_url = forks_url;
        this.keys_url = keys_url;
        this.collaborators_url = collaborators_url;
        this.teams_url = teams_url;
        this.hooks_url = hooks_url;
        this.issue_events_url = issue_events_url;
        this.events_url = events_url;
        this.assignees_url = assignees_url;
        this.branches_url = branches_url;
        this.tags_url = tags_url;
        this.blobs_url = blobs_url;
        this.git_tags_url = git_tags_url;
        this.git_refs_url = git_refs_url;
        this.trees_url = trees_url;
        this.statuses_url = statuses_url;
        this.languages_url = languages_url;
        this.stargazers_url = stargazers_url;
        this.contributors_url = contributors_url;
        this.subscribers_url = subscribers_url;
        this.subscription_url = subscription_url;
        this.commits_url = commits_url;
        this.git_commits_url = git_commits_url;
        this.comments_url = comments_url;
        this.issue_comment_url = issue_comment_url;
        this.contents_url = contents_url;
        this.compare_url = compare_url;
        this.merges_url = merges_url;
        this.archive_url = archive_url;
        this.downloads_url = downloads_url;
        this.issues_url = issues_url;
        this.pulls_url = pulls_url;
        this.milestones_url = milestones_url;
        this.notifications_url = notifications_url;
        this.labels_url = labels_url;
        this.releases_url = releases_url;
        this.deployments_url = deployments_url;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.pushed_at = pushed_at;
        this.git_url = git_url;
        this.ssh_url = ssh_url;
        this.clone_url = clone_url;
        this.svn_url = svn_url;
        this.homepage = homepage;
        this.size = size;
        this.stargazers_count = stargazers_count;
        this.watchers_count = watchers_count;
        this.language = language;
        this.has_issues = has_issues;
        this.has_projects = has_projects;
        this.has_downloads = has_downloads;
        this.has_wiki = has_wiki;
        this.has_pages = has_pages;
        this.has_discussions = has_discussions;
        this.forks_count = forks_count;
        this.mirror_url = mirror_url;
        this.archived = archived;
        this.disabled = disabled;
        this.open_issues_count = open_issues_count;
        this.license = license;
        this.allow_forking = allow_forking;
        this.is_template = is_template;
        this.web_commit_signoff_required = web_commit_signoff_required;
        this.topics = topics;
        this.visibility = visibility;
        this.forks = forks;
        this.open_issues = open_issues;
        this.watchers = watchers;
        this.default_branch = default_branch;
    }
}

class GithubRepoDTO {
    constructor({name, html_url, description, language}) {
        this.name = name
        this.html_url = html_url
        this.description = description
        this.main_language = language
        this.languages = []
    }
}

async function makeRequest(link) {
    const response = await fetch(link)
    const data = await response.json()
    return data
};

const repo = [];
const repodto = [];

export async function getCards() {
    const data = await makeRequest(GHURL)
    for (let index = 0; index < data.length; index++) {
        repo[index] =  new GithubRepo(data[index])
        repodto[index] = new GithubRepoDTO(repo[index])
        const languages = await makeRequest(repo[index].languages_url)
        repodto[index].languages = Object.keys(languages)
    }
    return repodto
}
