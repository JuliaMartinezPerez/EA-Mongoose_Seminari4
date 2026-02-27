import { Schema, model, Types } from 'mongoose';

export interface IBook {
  _id?: string;
  title: string;
  author: Types.ObjectId;
  genre: 'ROMANCE' | 'FANTASY' | 'SCI-FI';
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  genre: { type: String, enum: ['ROMANCE', 'FANTASY', 'SCI-FI'], required: false },
});

export const BookModel = model<IBook>('Book', bookSchema);