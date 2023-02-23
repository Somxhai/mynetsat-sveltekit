export type Dialogues = 'PAYMENT_QR' | 'FACULTIES' | 'NONE';

export type ScoreError = 'NONE' | 'INCOMPLETE' | 'MINIMUM' | 'MINIMUM_SUM';

export interface ScoreReport {
	error: ScoreError;
	score: number;
}

export interface NetsatType {
	syllabus: string;
	faculty: string;
	syllabus_id: number;
	weight: Weight;
	specific_capability?: SpecificCapability;
	minimum_score?: MinimumScore;
	minimum_sum?: number;
}

export interface MinimumScore {
	[key: string]: number;
	english: number;
	math: number;
	thai: number;
	science: number;
	physics: number;
	chemistry: number;
	biology: number;
}

export interface Weight {
	[key: string]: number;
	english: number;
	math: number;
	thai: number;
	science: number;
	physics: number;
	chemistry: number;
	biology: number;
}

export interface SpecificCapability {
	[key: string]: Foreign | FineArts | number | Architect | Education | MedicalVision;
	foreign: Foreign;
	fine_arts: FineArts;
	engineer: number;
	architect: Architect;
	education: Education;
	medical_vision: MedicalVision;
}

export interface AllSpecificCapabilities {
	[key: string]: number;
	engineer: number;
	spainish: number;
	french: number;
	german: number;
	chinese: number;
	japanese: number;
	korean: number;
	architect: number;
	design: number;
	body: number;
	goodatart: number;
	drawing: number;
	makeup: number;
	draw_communication: number;
	visual_art: number;
	music: number;
	dance: number;
	techmed: number;
	artmed: number;
}

export interface Architect {
	[key: string]: number;
	architect: number;
	design: number;
}

export interface Education {
	[key: string]: number;
	body: number;
	goodatart: number;
}

export interface FineArts {
	[key: string]: number;
	drawing: number;
	makeup: number;
	draw_communication: number;
	visual_art: number;
	music: number;
	dance: number;
}

export interface Foreign {
	[key: string]: number;
	spainish: number;
	french: number;
	german: number;
	chinese: number;
	japanese: number;
	korean: number;
}

export interface MedicalVision {
	[key: string]: number;
	techmed: number;
	artmed: number;
}
