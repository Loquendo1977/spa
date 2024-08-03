export function SearchCard(props) {
    let {id, title, _embedded} = props;
    let slug = _embedded.self[0].slug;

    return `
    <article>
    <h2>${title}</h2>
    <p>
    <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
    </p>
    </article>
    `;
}