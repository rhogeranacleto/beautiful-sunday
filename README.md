# A cool challenge task

- Before start do `npm install`
- To run in typescript `npm run dev`
- Or, to run in javascript, compile with `npm run tsc` and following with `npm start`
- Server will be online on port 3000.

### `/api/all/stats`

Returns a list of all airports and their reviews count.

### `/api/[airport]/stats`

- **Param airport: airport_name**

Returns airport by name and his reviews resume.

### `/api/[airport]/reviews`

- **Param airport: airport_name**

Returns reviews from airport name.

### Additional query filter

**In all API's it is possible to pass queries `max` to filter by `overall_rating` maximum value.**

**In all API's it is possible to pass queries `min` to filter by `overall_rating` minimum value.**