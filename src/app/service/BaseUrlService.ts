// base-url.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseUrlService {
  private baseUrl = 'http://localhost:8000/gym';

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
