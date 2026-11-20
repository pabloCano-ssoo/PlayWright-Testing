import {
  CreateNoteRequest,
  UpdateNoteRequest,
} from './note-model';

export const NOTE_VALID_DATA: CreateNoteRequest = {
  title: 'Playwright automation',
  description: 'Practice API testing with Playwright',
  category: 'Work',
  completed: false,
};

export const NOTE_UPDATE_DATA: UpdateNoteRequest = {
  title: 'Updated Playwright automation',
  description: 'Updated description',
  category: 'Personal',
  completed: true,
};

