export type NoteCategory = 'Home' | 'Work' | 'Personal';

export interface CreateNoteRequest {
  title: string;
  description: string;
  category: NoteCategory;
  completed?: boolean;
}

export interface UpdateNoteRequest {
  title: string;
  description: string;
  category: NoteCategory;
  completed: boolean;
}

export interface PatchNoteRequest {
  title?: string;
  description?: string;
  category?: NoteCategory;
  completed?: boolean;
}

export interface NoteResponse {
  id: number;
  title: string;
  description: string;
  category: NoteCategory;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}