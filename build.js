import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./index.js"],
    bundle: true,
    outfile: "./dist/bundle.js",
    platform: "node",
    // target: ["node18"],
    // external: ["express", "nock", "aws-sdk", "mock-aws-s3", "bcrypt", "morgan"],
  })
  .catch(() => process.exit(1));
