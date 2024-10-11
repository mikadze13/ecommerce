import { inject, Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "@angular/fire/auth";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { from, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    firebaseAuth = inject(Auth);

    signInWithGoogle(): Observable<void> {
        const provider = new GoogleAuthProvider();
        const promise = signInWithPopup(this.firebaseAuth, provider).then(() => { });
        return from(promise);
    }

    register(email: string, username: string, password: string): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password,
        ).then(response => updateProfile(response.user, { displayName: username }))
        return from(promise)
    }

    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(() => { })
        return from(promise)
    }

    isAuthenticated(): Observable<boolean> {
        return new Observable((observer) => {
            onAuthStateChanged(this.firebaseAuth, (user) => {
                observer.next(!!user);
                observer.complete();
            });
        });
    }
}