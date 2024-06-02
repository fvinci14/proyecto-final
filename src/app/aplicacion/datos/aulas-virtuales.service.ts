import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AulasVirtualesService {
  private materiasUrl = 'assets/aulas-virtuales.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  // Obtener todas las materias
  getMaterias(): Observable<any[]> {
    return this.http.get<any[]>(this.materiasUrl);
  }

  // Obtener materia por ID
  getMateriaById(id: string): Observable<any> {
    return this.http.get<any[]>(this.materiasUrl).pipe(
      map(materias => materias.find(materia => materia.id === id))
    );
  }

  // Obtener contenidos de una materia por ID
  getContenidosByMateriaId(id: string): Observable<any[]> {
    return this.getMateriaById(id).pipe(
      map(materia => materia.contenidos)
    );
  }

  getNombreMateriaById(id: string): Observable<string> {
    return this.getMateriaById(id).pipe(
      map(materia => materia ? materia.nombre : '')
    );
  }

  // Obtener asistencia de una materia por ID
  getAsistenciaByMateriaId(id: string): Observable<any[]> {
    return this.getMateriaById(id).pipe(
      map(materia => materia.asistencia)
    );
  }

  // Obtener comunicados de una materia por ID
  getComunicadosByMateriaId(id: string): Observable<any[]> {
    return this.getMateriaById(id).pipe(
      map(materia => materia.comunicados)
    );
  }

  // Obtener temas de una materia por ID
  getTemasByMateriaId(id: string): Observable<any[]> {
    return this.getMateriaById(id).pipe(
      map(materia => materia.temas)
    );
  }

  // Obtener procesos evacuativos de una materia por ID
  getProcesosEvacuativosByMateriaId(id: string): Observable<any[]> {
    return this.getMateriaById(id).pipe(
      map(materia => materia.procesos_evacutivos)
    );
  }
}
