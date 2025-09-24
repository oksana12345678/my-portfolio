import { dest, series, src } from "gulp";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer"; // Add autoprefixer if you want to add vendor prefixes
import cssnano from "cssnano"; // Minification plugin

const imageminPromise = import("gulp-imagemin");
const mozjpegPromise = import("imagemin-mozjpeg");
const optipngPromise = import("imagemin-optipng");
const svgoPromise = import("imagemin-svgo");

const paths = {
  images: {
    src: "src/assets/**/*.{jpg,jpeg,png,svg,gif}",
    dest: "dist/assets",
  },

  styles: {
    src: "src/**/*.css", // This should match all .css files in the src folder
    dest: "dist/assets",
  },
};

// Image optimization task
async function optimizeImages() {
  const { default: imagemin } = await imageminPromise;
  const { default: mozjpeg } = await mozjpegPromise;
  const { default: optipng } = await optipngPromise;
  const { default: svgo } = await svgoPromise;

  return src(paths.images.src)
    .pipe(
      imagemin([
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(paths.images.dest));
}

// CSS optimization task
function optimizeStyles() {
  return src(paths.styles.src)
    .pipe(postcss([autoprefixer()])) // Add autoprefixer for vendor prefixing
    .pipe(postcss([cssnano()])) // Minify the CSS
    .pipe(dest(paths.styles.dest));
}

// Default Gulp task
export default series(optimizeImages, optimizeStyles);
