import MovieItem from '../components/MovieItem.js';

function Movies(props) {
  var listItems = movies.map((m, idx) => React.createElement(MovieItem, { key: idx.toString(), itemContent: m }));
  return React.createElement(
    'ul',
    null,
    listItems
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiTW92aWVJdGVtIiwiTW92aWVzIiwicHJvcHMiLCJsaXN0SXRlbXMiLCJtb3ZpZXMiLCJtYXAiLCJtIiwiaWR4IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsNEJBQXRCOztBQUVBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CLE1BQUlDLFlBQWFDLE9BQU9DLEdBQVAsQ0FBVyxDQUFDQyxDQUFELEVBQUlDLEdBQUosS0FDM0Isb0JBQUMsU0FBRCxJQUFXLEtBQUtBLElBQUlDLFFBQUosRUFBaEIsRUFBZ0MsYUFBYUYsQ0FBN0MsR0FEZ0IsQ0FBakI7QUFHRixTQUNFO0FBQUE7QUFBQTtBQUNHSDtBQURILEdBREY7QUFLRCIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUl0ZW0uanMnXG5cbmZ1bmN0aW9uIE1vdmllcyhwcm9wcykge1xuICAgIHZhciBsaXN0SXRlbXMgPSAgbW92aWVzLm1hcCgobSwgaWR4KSA9PiBcbiAgICBcdDxNb3ZpZUl0ZW0ga2V5PXtpZHgudG9TdHJpbmcoKX0gaXRlbUNvbnRlbnQ9e219IC8+XG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7bGlzdEl0ZW1zfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbiJdfQ==