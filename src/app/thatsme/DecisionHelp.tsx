"use client";

import { useState, useEffect, useRef } from 'react';

const DecisionHelp = () => {
    const [values, setValues] = useState<string[]>(['']);
    const [disabledIndexes, setDisabledIndexes] = useState<number[]>([]);
    const [result, setResult] = useState<string | null>(null);
    const newInputRef = useRef<HTMLInputElement | null>(null);

    // Funktion zum Hinzufügen eines leeren Eingabefeldes und Sperren der vorherigen Eingaben
    const addValueField = () => {
        setValues((prevValues) => {
            // Sperrt das aktuelle Feld, bevor das neue leere Feld hinzugefügt wird
            setDisabledIndexes((prevIndexes) => [...prevIndexes, prevValues.length - 1]);

            // Fügt ein neues, leeres Eingabefeld hinzu
            return [...prevValues, ''];
        });
    };

    useEffect(() => {
        if (newInputRef.current) {
            newInputRef.current.focus();
        }
    }, [values]);

    // Funktion, um eine Entscheidung zu treffen
    const makeDecision = () => {
        if (values.length === 0) return;
        const randomValue = values[Math.floor(Math.random() * values.length)];
        setResult(randomValue);
    };

    // Eingabewerte aktualisieren
    const handleInputChange = (index: number, newValue: string) => {
        setValues((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = newValue;
            return updatedValues;
        });
    };

    // Key-Listener für Enter
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                addValueField();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [values]);

    // Reset-Funktion
    const resetValues = () => {
        setValues(['']);
        setDisabledIndexes([]); // Alle Felder entsperren
        setResult(null);
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-bold text-BlueViolet">Decision Finder</h1>

            {values.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Wert ${index + 1}`}
                    className="w-full p-2 border border-NeoRose-300 rounded text-Pantone placeholder-Pantone/50"
                    disabled={disabledIndexes.includes(index)} // Sperrt nur Felder, die in `disabledIndexes` sind
                    ref={index === values.length - 1 ? newInputRef : null}
                />
            ))}

            <div className="flex justify-between items-center flex-wrap gap-1 mt-4">
                <button
                    onClick={addValueField}
                    className="w-40 bg-BlueViolet text-white p-2 rounded"
                >
                    Add More
                </button>

                <button
                    onClick={makeDecision}
                    className="w-40 bg-NeoRose text-white p-2 rounded"
                >
                    Make Decision
                </button>

                <button
                    onClick={resetValues}
                    className="w-40 bg-Azure text-white p-2 rounded"
                >
                    Reset
                </button>
            </div>

            {result && (
                <div
                    className="mt-6 p-4 text-Amber bg-Pantone border border-Amber rounded">
                    <p>Decision: <strong>{result}</strong></p>
                </div>
            )}
        </div>
    );
};

export default DecisionHelp;
