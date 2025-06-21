# Bookmark Manager App

A simple and interactive bookmark manager built with **HTML**, **CSS**, and **JavaScript**.  
This app lets users add, view, and delete bookmarks organized by category. Bookmarks are saved locally using the browser's `localStorage` API, so data persists across sessions without needing a backend.

---

## Features

- Add bookmarks with **name**, **URL**, and **category**  
- View bookmarks filtered by selected category  
- Delete selected bookmarks  
- Categories include: News, Entertainment, Work, Miscellaneous  
- Data persistence using `localStorage`  
- Responsive toggling between main, form, and bookmark list views  
- Validates localStorage data to avoid errors or corrupted entries

---

## Project Structure

- `index.html` — Main HTML layout with sections for adding and viewing bookmarks  
- `styles.css` — Styling for layout and responsive design  
- `script.js` — JavaScript functionality handling localStorage, UI toggling, and event listeners

---

##  Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript (ES6+)  
- Browser `localStorage` API

---

##  How to Use

1. Select a category from the dropdown menu  
2. Click **Add Bookmark** to enter a bookmark name and URL  
3. Click **View Category** to see all bookmarks saved in that category  
4. Select a bookmark from the list to open it or delete it using the **Delete Bookmark** button  
5. Bookmarks are saved locally and will persist between browser sessions  

---

## Future Features

- **Edit Bookmarks:** Allow users to update bookmark names or URLs  
- **Search Functionality:** Add a search box to filter bookmarks by name or URL  
- **Bookmark Tags:** Support multiple tags per bookmark for flexible filtering  
- **Import/Export:** Allow users to export bookmarks as JSON or CSV and import them back  
- **Favicon Display:** Show website icons next to bookmarks for easier identification  
- **Drag & Drop Sorting:** Enable reordering bookmarks within categories  
- **Dark Mode:** Add a toggle for light/dark themes  
- **Mobile Swipe Navigation:** Improve UX on mobile devices with swipe gestures  
- **Auto-validation:** Validate URLs on input for correctness  
- **Bookmark Preview:** Show a tooltip or popup preview of the linked page  

---

## Feedback and Contributions

Feel free to open issues or submit pull requests to improve the app.  
Suggestions and feature requests are welcome!

---

## License

This project is open source and free to use under the MIT License.
