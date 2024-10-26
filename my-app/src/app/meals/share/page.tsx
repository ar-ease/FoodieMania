"use client";
import React from "react";
import { useActionState } from "react";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { shareMeal } from "@/lib/actions";

interface FormState {
  message: string | null;
}

const initialState: FormState = {
  message: null,
};

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, initialState);

  return (
    <>
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold mb-2">
          Share your <span className="text-primary">favorite meal</span>
        </h1>
        <p className="text-gray-600">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="max-w-2xl mx-auto px-4">
        <form className="space-y-6" action={formAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="summary" className="block text-sm font-medium mb-1">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="block text-sm font-medium mb-1"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
            />
          </div>

          <ImagePicker label="Image" name="image" />

          {state.message && (
            <div className="p-4 bg-red-50 text-red-600 rounded">
              {state.message}
            </div>
          )}

          <div className="flex justify-end">
            <MealsFormSubmit />
          </div>
        </form>
      </main>
    </>
  );
}
