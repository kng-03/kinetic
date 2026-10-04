# MCOE ClubConnect — Fixed Responsive Version

A self-contained frontend prototype for PES's Modern College of Engineering student clubs, chapters, activities and events.

## What was fixed
- No broken local image paths: logo and gallery/club artwork are included as local SVG assets.
- Responsive mobile-first layout with hamburger navigation.
- Mobile auth modal is scrollable and fits small screens.
- Club search and category filters work.
- Login/register validation and password visibility work.
- Demo account data uses browser localStorage.
- Event detail modal and registration-interest interaction work.
- No framework or build step is required.

## Run
Use VS Code + Live Server for the most reliable result:
1. Open this folder in VS Code.
2. Right-click `index.html`.
3. Choose **Open with Live Server**.
4. For phone testing on the same Wi-Fi, open the Live Server LAN address shown by VS Code, for example `http://192.168.x.x:5500/`.

## Important
This is a frontend prototype. It does not provide secure production authentication. For real student accounts, role-based access and persistent registrations, connect Firebase or Supabase.

The current club/chapter names are based on the current MCOE website sections. Replace the included project logo SVG with the official institutional logo file if you have permission to use it.


### v3 update
- Exact MCOE/PES logo supplied by the owner is stored locally as `assets/images/mcoe-official-logo.png`.
- Removed external logo dependency.
- Added local hero illustration so the hero does not rely on remote images.
