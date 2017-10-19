const createPooling = (promise, cb, intervalTime) => {
    let interval;
    return {
        isStarted: false,
        async start() {
            if (this.isStarted) {
                return;
            }

            this.isStarted = true;

            cb(await promise());
            interval = setInterval(async () => {
                cb(await promise());
            }, intervalTime || 60000);
        },
        stop () {
            this.isStarted = false
            clearInterval(interval);
        }
    }
};

const converter = new showdown.Converter();
const getSubmisionsPath = () => settings.submissions_project.split('/')[1];
const getTeamPath = teamName => sha256(teamName).splice(1, 0, '/').splice(5, 0, '/');


const getSettings = () => $.getJSON('settings.json');
const getNews = () => $.getJSON(`/${getSubmisionsPath()}/news.json`);
const getChallenges = () => $.getJSON('challenges/index.json');
const getChallenge = id => $.getJSON(`challenges/${id}.json`);
const getChallengeDescription = (id, lang) => $.get(`challenges/${id}.${lang}.md`);
const getSolvedChallenges = () => $.getJSON(`/${getSubmisionsPath()}/accepted-submissions.json`);
const getTeam = teamName => $.getJSON(`/${getSubmisionsPath()}/${getTeamPath(teamName)}/team.json`);
const getTeamMembers = teamName => $.getJSON(`/${getSubmisionsPath()}/${getTeamPath(teamName)}/members.json`);
const getLocaleMessages = lang => $.getJSON(`frontend/locales/${lang}.json`)

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
