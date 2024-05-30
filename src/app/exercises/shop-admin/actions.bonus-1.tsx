'use server'
import {
  deleteProduct as deleteProductDao,
  getProducts as getProductsDao,
  persistProduct as persistProductDao,
} from '@/db/sgbd'

import {revalidatePath} from 'next/cache'
import {Product} from '@/lib/type'
import {formSchema} from './schema'

const formSchemaLight = formSchema.partial({
  id: true,
  createdAt: true,
})

type FormStateSimple = {error: boolean; message: string}

export async function onSubmitAction(
  prevState: FormStateSimple,
  data: FormData
): Promise<FormStateSimple> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const formData = Object.fromEntries(data)
  const parsed = formSchemaLight.safeParse(formData)
  if (!parsed.success) {
    logZodError(data)
    return {error: true, message: `erreur(s) de validation`}
  }
  try {
    await persistProductDao(parsed.data as Product)
    return {error: false, message: 'Success'}
  } catch (error) {
    return {error: true, message: `Server Error ${error}`}
  }
}

function logZodError(data: FormData) {
  const formData = Object.fromEntries(data)
  const parsed = formSchemaLight.safeParse(formData)
  const errorMessages = parsed?.error?.errors
    .map((err) => `${err.path} ${err.message}`)
    .join(', ')
  console.error('Zod errorMessages', errorMessages)
}

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const products = await getProductsDao()
  return products
}

export const persistProduct = async (product: Product) => {
  await persistProductDao(product)
  revalidatePath('/exercises/shop-admin')
}

export const deleteProduct = async (product: Product) => {
  await deleteProductDao(product.id)
  revalidatePath('/exercises/shop-admin')
}
