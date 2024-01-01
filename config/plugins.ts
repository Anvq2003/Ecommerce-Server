export default function ({ env }) {
  return {
    i18n: true,
    seo: {
      enabled: true,
    },
    ckeditor: {
      enabled: true,
    },
    upload: {
      enabled: true,
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            params: {
              Bucket: env("S3_BUCKET", "grocery-server-store"),
              ACL: "public-read",
            },
            forcePathStyle: true,
            s3ForcePathStyle: true,
            accessKeyId: env("S3_ACCESS_KEY_ID", "AKIAV3LIMGLL6Y34YPN7"),
            secretAccessKey: env(
              "S3_ACCESS_SECRET",
              "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"
            ),
            region: "current",
            // endpoint: env("S3_ENDPOINT", "https://alta-s3.dev-altamedia.com"), // e.g. "s3.fr-par.scw.cloud"
          },
        },
      },
    },
  };
}
