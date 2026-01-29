* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4);
    color: #222;
    text-align: center;
}

header {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.2s ease;
}

nav ul li a:hover {
    color: #ff69b4;
}

main {
    display: grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.character-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.character-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.character-img {
    width: 100%;
    border-radius: 10px;
}

.character-name {
    font-size: 1.2rem;
    margin-top: 10px;
    font-weight: bold;
}

.character-desc {
    font-size: 0.9rem;
    color: #555;
    margin-top: 5px;
}

.character-rating {
    margin-top: 8px;
    color: #ffb400;
    font-size: 1rem;
}

footer {
    margin-top: 30px;
    padding: 15px;
    font-size: 0.85rem;
    color: #555;
}
