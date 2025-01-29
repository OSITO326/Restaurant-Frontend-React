import { z } from 'zod';

export const CategorySchema = z.object({
  name: z
    .string({
      required_error: 'Nombre es requerido',
      invalid_type_error: 'Nombre debe ser un string',
    })
    .min(3, {
      message: 'El nombre debe tener al menos 3 caracteres',
    })
    .max(200, {
      message: 'El nombre debe tener como máximo 200 caracteres',
    }),
  description: z
    .string({
      required_error: 'Descripción es requerida',
      invalid_type_error: 'Descripción debe ser un string',
    })
    .min(3, { message: 'La descripción debe tener al menos 3 caracteres' })
    .max(200, {
      message: 'La descripción debe tener como máximo 200 caracteres',
    }),
});
export type Category = z.infer<typeof CategorySchema>;

export const GeneratedTypeSchema = z.object({
  categories: z.array(CategorySchema),
});
export type GeneratedType = z.infer<typeof GeneratedTypeSchema>;
