document.addEventListener('DOMContentLoaded', () => {

    /* ── Search ── */
    const mockData = [
        { type: 'user', name: 'BuilderPro123' },
        { type: 'user', name: 'TraderKing99' },
        { type: 'limited', name: 'Dominus Empyreus' },
        { type: 'limited', name: 'Bluesteel Domino Crown' },
        { type: 'listing', name: 'Trading Dominus for 10k' },
    ];

    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            const results = mockData.filter(i => i.name.toLowerCase().includes(query));
            renderDropdown(results);
        } else {
            searchDropdown.style.display = 'none';
        }
    });

    function renderDropdown(results) {
        searchDropdown.innerHTML = '';
        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="dropdown-empty">No results found</div>';
            searchDropdown.style.display = 'block';
            return;
        }
        const groups = ['user', 'limited', 'listing'];
        const labels = { user: 'Users', limited: 'Limiteds', listing: 'Listings' };
        groups.forEach(group => {
            const groupResults = results.filter(r => r.type === group);
            if (!groupResults.length) return;
            const header = document.createElement('div');
            header.className = 'dropdown-header';
            header.textContent = labels[group];
            searchDropdown.appendChild(header);
            groupResults.forEach(item => {
                const el = document.createElement('div');
                el.className = 'dropdown-item';
                el.textContent = item.name;
                el.addEventListener('click', () => {
                    searchInput.value = item.name;
                    searchDropdown.style.display = 'none';
                });
                searchDropdown.appendChild(el);
            });
        });
        searchDropdown.style.display = 'block';
    }

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });

    /* ── Mock Limiteds ── */
    const limiteds = [
        { name: 'Dominus Empyreus', price: 68800, image: null },
        { name: 'Oozing Oscar', price: 2150, image: null },
        { name: 'Bunny Ears', price: 18700, image: null },
        { name: 'Lampshade', price: 1490, image: null },
        { name: 'Pinstripe Fedora', price: 8300, image: null },
        { name: 'Clockwork Headphones', price: 13998, image: null },
        { name: 'Fall Fairy Wings', price: 9400, image: null },
    ];

    const limitedsRow = document.getElementById('limiteds-row');
    limiteds.forEach(item => {
        const card = document.createElement('div');
        card.className = 'limited-card';
        card.innerHTML = `
            <div style="width:100%;aspect-ratio:1;background:#2a2a2a;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#555;font-size:12px;">No Image</div>
            <div class="item-name">${item.name}</div>
            <div class="limited-badge">LIMITED U</div>
            <div class="item-meta">
                <span>Price</span>
                <span class="item-price">${item.price.toLocaleString()}</span>
            </div>
        `;
        limitedsRow.appendChild(card);
    });

    /* ── Mock Trade Listings ── */
    const trades = [
        { user: 'TraderKing99', initials: 'TK', title: 'Trading Dominus for Bluesteel', items: ['Dominus Empyreus'], wants: ['Bluesteel Crown'], time: '2 mins ago' },
        { user: 'BuilderPro123', initials: 'BP', title: 'WTB Clockwork Headphones', items: ['50k coins'], wants: ['Clockwork Headphones'], time: '15 mins ago' },
        { user: 'RobloxFan2020', initials: 'RF', title: 'Selling rare hat bundle', items: ['Bunny Ears', 'Lampshade'], wants: ['Best offer'], time: '1 hr ago' },
    ];

    const tradesRow = document.getElementById('trades-row');
    trades.forEach(trade => {
        const card = document.createElement('div');
        card.className = 'trade-card';
        card.innerHTML = `
            <div class="trade-user">
                <div class="trade-avatar">${trade.initials}</div>
                ${trade.user}
            </div>
            <div class="trade-title">${trade.title}</div>
            <div style="font-size:12px;color:#888;">Offering</div>
            <div class="trade-items">${trade.items.map(i => `<span class="trade-item-pill">${i}</span>`).join('')}</div>
            <div style="font-size:12px;color:#888;">Wants</div>
            <div class="trade-items">${trade.wants.map(i => `<span class="trade-item-pill">${i}</span>`).join('')}</div>
            <div class="trade-footer">${trade.time}</div>
        `;
        tradesRow.appendChild(card);
    });

});