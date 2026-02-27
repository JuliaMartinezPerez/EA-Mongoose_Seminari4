import { Schema, model } from 'mongoose';

// 1. Interface (Contracte d'Enginyeria)
export interface IOrganization {
  _id?: string; //^ MongoDB genera automaticament l'id
  name: string;
  country: string;
} 
//^ El JSON haurà de tenir això (? vol dir que _id es opcional)

// 2. Schema (Validació BBDD)
const organizationSchema = new Schema<IOrganization>({
  name: { type: String, required: true },
  country: { type: String, required: true }
});
//^ Diu com es guarda i com s'indexa en la BBDD

// 3. Model
export const OrganizationModel = model<IOrganization>('Organization', organizationSchema);