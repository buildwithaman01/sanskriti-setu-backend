document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/content')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayHeritageSites(data.heritage_sites);
            displayCulturalTopics(data.cultural_topics);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('sites-container').innerHTML = '<p>Error loading heritage sites.</p>';
            document.getElementById('topics-container').innerHTML = '<p>Error loading cultural topics.</p>';
        });
});

function displayHeritageSites(sites) {
    const container = document.getElementById('sites-container');
    sites.forEach(site => {
        const siteDiv = document.createElement('div');
        siteDiv.className = 'site';
        siteDiv.innerHTML = `
            <h3>${site.name}</h3>
            <p><strong>Location:</strong> ${site.location}</p>
            <p><strong>Description:</strong> ${site.short_description}</p>
            <p><strong>History:</strong> ${site.full_history}</p>
            <p><strong>Bot Story:</strong> ${site.bot_story_script}</p>
        `;
        container.appendChild(siteDiv);
    });
}

function displayCulturalTopics(topics) {
    const container = document.getElementById('topics-container');
    topics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic';
        topicDiv.innerHTML = `
            <h3>${topic.name}</h3>
            <p>${topic.description}</p>
            <div class="reels">
                <strong>Reels:</strong>
                <ul>
                    ${topic.reels.map(reel => `<li>${reel}</li>`).join('')}
                </ul>
            </div>
        `;
        container.appendChild(topicDiv);
    });
}
