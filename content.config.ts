import { defineCollection, z } from '@nuxt/content'

const createEnum = (options: [string, ...string[]]) => z.enum(options)

function createBaseSchema() {
  return z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
  })
}

function createLinkSchema() {
  return z.object({
    label: z.string().nonempty(),
    to: z.string().nonempty(),
    icon: z.string().optional().editor({ input: 'icon' }),
    size: createEnum(['xs', 'sm', 'md', 'lg', 'xl']),
    trailing: z.boolean().optional(),
    target: createEnum(['_blank', '_self']),
    color: createEnum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info']),
    variant: createEnum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']),
  })
}

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object({
        headline: z.string().optional(),
        links: z.array(createLinkSchema()),
      }),

      services: createBaseSchema().extend({
        services: z.array(createBaseSchema().extend({
          icon: z.string().editor({ input: 'icon' }),
          ui: z.object({ leading: z.string().optional() }).editor({ hidden: true }),
        })),
      }),

      solutions: createBaseSchema().extend({
        items: z.array(createBaseSchema().extend({
          icon: z.string().editor({ input: 'icon' }),
          ui: z.object({ leading: z.string().optional() }).editor({ hidden: true }),
          image: z.string().editor({ input: 'media' }),
          link: createLinkSchema(),
        })),
      }),

      news: createBaseSchema().extend({
        items: z.array(createBaseSchema().extend({
          image: z.string().editor({ input: 'media' }),
          date: z.string(),
          link: createLinkSchema(),
        })),
      }),

      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema()),
      }),
    }),
  }),
}
