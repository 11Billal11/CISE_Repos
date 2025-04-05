import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
  @Prop()
  title: string;

  @Prop()
  authors: string[];

  @Prop()
  source: string;

  @Prop()
  pubyear: string;

  @Prop()
  doi: string;

  @Prop()
  claim: string;

  @Prop()
  evidence: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);