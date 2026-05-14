import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default ((opts?: { src?: string; alt?: string }) => {
  const Banner: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const src =
      opts?.src ??
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20ink%20wash%20painting%20landscape%20with%20calligraphy%20text%20%E2%80%9C%E8%8E%AB%E5%90%AC%E7%A9%BF%E6%9E%97%E6%89%93%E5%8F%B6%E5%A3%B0%EF%BC%8C%E4%BD%95%E5%A6%A8%E5%90%9F%E5%95%B8%E4%B8%94%E5%BE%90%E8%A1%8C%E2%80%9D%20written%20in%20elegant%20brush%20calligraphy%2C%20misty%20mountains%2C%20pine%20trees%2C%20serene%20atmosphere%2C%20minimalist%20style%2C%20soft%20light%2C%20zen%20aesthetic%2C%20vertical%20Chinese%20text&image_size=landscape_16_9"
    const alt = opts?.alt ?? "Banner"
    return (
      <div class={classNames(displayClass, "banner")}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    )
  }

  Banner.css = `
  .banner {
    width: 100%;
    margin: 1.5rem 0 0.5rem 0;
    border-radius: 8px;
    overflow: hidden;
    line-height: 0;
  }

  .banner img {
    width: 100%;
    height: auto;
    max-height: 280px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0;
  }
  `
  return Banner
}) satisfies QuartzComponentConstructor