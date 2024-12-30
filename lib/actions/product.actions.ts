'use server'

import { desc } from 'drizzle-orm';
import db from '@/db/drizzle';
import { products } from '@/db/schema';

export async function getLatestProducts() {
  try {
    const data = await db.query.products.findMany({
      orderBy: [desc(products.createdAt)],
      limit: 4,
    });
    return data;
  } catch (error) {
    console.error('Error fetching latest products:', error);
    throw error;
  }
}
