setInterval(function(){await (
    await fetch(
        `https://api.prodigygame.com/leaderboard-api/season/${hack.instance.prodigy.gameContainer.get("PVPNetworkHandler").seasonID}/user/${hack.instance.prodigy.player.userID}/pvp?userID=${hack.instance.prodigy.player.userID}`,

        {
            "headers": {
                "authorization": `Bearer ${hack.instance.prodigy.gameContainer.get("NetworkManager").jwtAuthProvider.getToken()}`,
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-mode": "cors"
            },
            "referrer": "https://play.prodigygame.com/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": `seasonID=${hack.instance.prodigy.gameContainer.get("PVPNetworkHandler").seasonID}&action=win`,
            "method": "POST",
            "mode": "cors"
        })
).text()}, (65000));

// makes it so every 60.5 seconds / 1 minute and half a second it executes the script.
// original script founded by pathetic mustan, xaro / sailknight added an Interval Loop.
//if you spam execute it, it will not work / give points