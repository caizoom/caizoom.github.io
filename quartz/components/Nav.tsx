import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Nav: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <nav class={`${displayClass ?? ""} site-nav`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  Nav.css = `
  .site-nav {
    width: 100%;
    background: var(--lightgray);
    border-radius: 6px;
    padding: 0.6rem 1rem;
    margin-top: 0.8rem;
  }

  .site-nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.8rem;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  .site-nav ul li {
    margin: 0;
  }

  .site-nav ul li a {
    color: var(--dark);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .site-nav ul li a:hover {
    color: var(--darkgray);
  }
  `
  return Nav
}) satisfies QuartzComponentConstructor