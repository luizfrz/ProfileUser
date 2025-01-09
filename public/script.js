        fetch('http://localhost:8080/steam/activities')
            .then(response => response.json())
            .then(data => {
                const games = data.games;
                const gameListDiv = document.getElementById('game-list');

                if (games.length === 0) {
                    gameListDiv.innerHTML = '<p>Você não tem atividades recentes na Steam.</p>';
                    return;
                }

                games.forEach(game => {
                    const gameDiv = document.createElement('div');
                    gameDiv.classList.add('game-item');
                    
                    const gameImage = document.createElement('img');
                    gameImage.src = `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`;
                    gameImage.alt = game.name;
                    gameImage.width = 50; 
                    gameDiv.appendChild(gameImage);

                   
                    const gameName = document.createElement('p');
                    gameName.innerText = game.name;
                    gameDiv.appendChild(gameName);

               
                    const playtime = document.createElement('p');
                    playtime.innerText = `Tempo de jogo: ${game.playtime_forever} minutos`;
                    gameDiv.appendChild(playtime);

                    gameListDiv.appendChild(gameDiv);
                });
            })
            .catch(error => {
                console.error('Atividades não foram encontradas!', error);
                document.getElementById('game-list').innerHTML = '<p>Algum erro no codigo</p>';
            });
