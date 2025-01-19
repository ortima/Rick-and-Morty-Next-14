import {
	Character,
	Gender,
	ICharacterResponse,
	Species,
	Status
} from "@/types/character";
import { BASE_URL } from "./constants";

export class CharacterAPI {
	private static async fetchAPI<T>(
		endpoint: string,
		options?: RequestInit
	): Promise<T | undefined> {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 10000);

		try {
			const response = await fetch(endpoint, {
				...options,
				signal: controller.signal
			});

			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
			}

			const json = await response.json();

			if (!json) {
				console.warn("Пустой ответ от API:", endpoint);
				return undefined;
			}

			return json;
		} catch (error) {
			console.error("Ошибка при выполнении запроса:", error);
			return undefined;
		} finally {
			clearTimeout(timeout);
		}
	}

	// Получить персонажа по ID
	static async getCharacterById(id: number): Promise<Character | undefined> {
		const endpoint = `${BASE_URL}/${id}`;
		return this.fetchAPI<Character>(endpoint);
	}

	// Получить всех персонажей
	static async getAllCharacters(): Promise<ICharacterResponse | undefined> {
		return this.fetchAPI<ICharacterResponse>(BASE_URL);
	}

	// Получить нескольких персонажей по ID (через запятую)
	static async getCharactersByIds(
		ids: number[]
	): Promise<Character[] | undefined> {
		const endpoint = `${BASE_URL}/${ids.join(",")}`;
		return this.fetchAPI<Character[]>(endpoint);
	}

	// Поиск персонажей по параметрам
	static async getCharactersByFilters(params: {
		name?: string;
		status?: keyof typeof Status;
		species?: keyof typeof Species;
		type?: string; //Надо пересмотреть
		gender?: keyof typeof Gender;
		page?: string;
	}): Promise<ICharacterResponse | undefined> {
		const query = new URLSearchParams();

		if (params.name) query.append("name", params.name);
		if (params.status) query.append("status", params.status);
		if (params.page) query.append("page", params.page);

		const endpoint = `${BASE_URL}/?${query.toString()}`;
		return this.fetchAPI<ICharacterResponse>(endpoint);
	}
}
