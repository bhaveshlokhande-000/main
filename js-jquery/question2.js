let qTeams = {
    aaiec: 400,
    aaiwc: 60,
    qai: 200,
    poc: 100,
    gtm: 50,
    hr: 10
};

var qTeamEntries = [];
for (var qTeam in qTeams) {
    qTeamEntries.push([qTeam, qTeams[qTeam]]);
}

qTeamEntries.sort(function (a, b) {
    return b[1] - a[1];
});

var qTeamsSorted = {}
qTeamEntries.forEach(function (qTeam) {
    qTeamsSorted[qTeam[0]] = qTeam[1]
});

console.log(qTeamsSorted)
