# Robl​oc Username Availability Checker

A simple, modern, dark‑mode website that lets users type a **keyword** and instantly see a list of **available usernames** based on that keyword.

## Features
- **Mobile‑first responsive design** – works on any screen size.
- Dark mode is the default theme, using CSS custom properties for easy theming.
- Smooth CSS transitions and subtle hover animations for a professional feel.
- Semantic HTML5 structure with ARIA live region for accessible result updates.
- Pure front‑end implementation (no server required) using a mock dataset.
- Clean, commented code ready for extension (e.g., replace mock data with a real API).

## Project Structure
```
/ (root)
│
├─ index.html      → Main page markup
├─ styles.css      → All styling (dark mode, layout, animations)
├─ script.js       → Username generation & availability logic
└─ README.md       → This documentation
```

## How It Works
1. The user enters a keyword (e.g., `tech`).
2. The script creates several variations (`tech`, `tech01`, `tech_official`, …).
3. It checks each variation against a hard‑coded set of **taken** usernames.
4. Available usernames are displayed in a responsive grid.

*In a production environment you would replace the mock `takenUsernames` set with an API call.*

## Setup & Usage
1. Clone or download the repository.
2. Ensure the four files (`index.html`, `styles.css`, `script.js`, `README.md`) are in the same folder.
3. Open `index.html` in any modern browser.

No build tools, npm, or servers are required.

## Extending the Project
- **API Integration**: Replace the mock `takenUsernames` with a `fetch` request to your backend.
- **Theming**: Add a light‑mode toggle by switching CSS custom property values.
- **Additional Variations**: Expand `generateUsernames` with more creative patterns.
- **User Interaction**: Add copy‑to‑clipboard buttons for each generated username.

## License
This project is released under the MIT License – feel free to use, modify, and share.

--- 

Enjoy checking those usernames!