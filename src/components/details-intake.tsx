'use client';

import { FormEvent, useMemo, useState } from "react";

type FieldKey =
  | "shopName"
  | "brandTone"
  | "productCategories"
  | "averagePrice"
  | "targetAudience"
  | "salesChannels"
  | "promoMoments"
  | "operationsNotes";

type FieldState = Record<FieldKey, string>;

const initialState: FieldState = {
  shopName: "",
  brandTone: "",
  productCategories: "",
  averagePrice: "",
  targetAudience: "",
  salesChannels: "",
  promoMoments: "",
  operationsNotes: "",
};

const fieldMeta: Record<
  FieldKey,
  { label: string; placeholder: string; helper: string; required?: boolean }
> = {
  shopName: {
    label: "Shop name & promise",
    placeholder: "Starlit Keepsakes — curated, meaningful gifting",
    helper:
      "How do you introduce the brand in one sentence? This anchors the story and hero messaging.",
    required: true,
  },
  brandTone: {
    label: "Brand voice & tone",
    placeholder:
      "Warm, clever, community-driven. Bright pastels, hand-drawn doodles, ribbon textures.",
    helper:
      "Capture the adjectives, visual cues, and emotions that should be communicated across the site.",
    required: true,
  },
  productCategories: {
    label: "Key product categories",
    placeholder: "Personalized gift boxes, artisan candles, baby arrival gifts, seasonal bundles",
    helper:
      "List top collections or product groupings so navigation and merchandising can be structured appropriately.",
    required: true,
  },
  averagePrice: {
    label: "Price range / AOV",
    placeholder: "$35 - $120 with bundles averaging $85",
    helper:
      "Share typical pricing to tailor product badges, bundle suggestions, and upsell prompts.",
  },
  targetAudience: {
    label: "Primary audiences",
    placeholder: "Corporate gifting leads, wedding planners, last-minute shoppers, local pickup community",
    helper:
      "Who buys most often? Mention demographics, intent, and whether they shop in-store, online, or both.",
    required: true,
  },
  salesChannels: {
    label: "Sales channels & integrations",
    placeholder: "Shopify POS in-store, Square for pop-ups, Mailchimp newsletter, Instagram Shop",
    helper:
      "Include tools and platforms we should connect (inventory, CRM, loyalty, live chat, etc.).",
  },
  promoMoments: {
    label: "Seasonal & promotional moments",
    placeholder: "Mother's Day curated sets, holiday advent calendar, local maker spotlights each quarter",
    helper:
      "Note peak seasons, launches, or collaborations so we can plan homepage swaps and automation.",
  },
  operationsNotes: {
    label: "Operations notes",
    placeholder: "Handwritten note add-ons, 2-day fulfillment, local bike delivery within 5 miles",
    helper:
      "Anything logistical that impacts checkout, shipping messaging, or post-purchase flows.",
  },
};

const textareaRows: Partial<Record<FieldKey, number>> = {
  brandTone: 3,
  productCategories: 3,
  operationsNotes: 3,
};

export function DetailsIntake() {
  const [fields, setFields] = useState<FieldState>(initialState);
  const [showSummary, setShowSummary] = useState(false);

  const summary = useMemo(() => {
    const lines: string[] = [];
    if (fields.shopName.trim()) {
      lines.push(`Brand: ${fields.shopName.trim()}`);
    }
    if (fields.brandTone.trim()) {
      lines.push(`Look & feel: ${fields.brandTone.trim()}`);
    }
    if (fields.productCategories.trim()) {
      lines.push(`Hero categories: ${fields.productCategories.trim()}`);
    }
    if (fields.targetAudience.trim()) {
      lines.push(`Audience spotlight: ${fields.targetAudience.trim()}`);
    }
    if (fields.averagePrice.trim()) {
      lines.push(`Pricing cues: ${fields.averagePrice.trim()}`);
    }
    if (fields.salesChannels.trim()) {
      lines.push(`Tools to connect: ${fields.salesChannels.trim()}`);
    }
    if (fields.promoMoments.trim()) {
      lines.push(`Campaign calendar: ${fields.promoMoments.trim()}`);
    }
    if (fields.operationsNotes.trim()) {
      lines.push(`Operations notes: ${fields.operationsNotes.trim()}`);
    }
    return lines.join("\n");
  }, [fields]);

  const handleChange = (key: FieldKey) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSummary(true);
  };

  const handleReset = () => {
    setFields(initialState);
    setShowSummary(false);
  };

  return (
    <section
      id="details"
      className="rounded-3xl border border-emerald-100 bg-white/70 p-8 shadow-sm backdrop-blur-sm"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Discovery blueprint
        </h2>
        <p className="text-3xl font-semibold text-slate-900">
          Capture the essentials once—share them with every partner.
        </p>
        <p className="text-base text-slate-600">
          Use this worksheet to organize the brand ingredients we need. Save
          the summary and drop it in an email, Notion doc, or kickoff deck.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {Object.entries(fieldMeta).map(([key, meta]) => {
          const typedKey = key as FieldKey;
          const rows = textareaRows[typedKey] ?? 2;
          return (
            <label key={key} className="block">
              <div className="flex items-center justify-between text-sm font-medium text-slate-800">
                <span>{meta.label}</span>
                {meta.required ? (
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                    Required
                  </span>
                ) : null}
              </div>
              <textarea
                required={Boolean(meta.required)}
                rows={rows}
                value={fields[typedKey]}
                onChange={(event) => handleChange(typedKey)(event.target.value)}
                placeholder={meta.placeholder}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              />
              <p className="mt-1 text-xs text-slate-500">{meta.helper}</p>
            </label>
          );
        })}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-100"
          >
            Generate summary
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-100"
          >
            Clear fields
          </button>
        </div>
      </form>

      {showSummary ? (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-900">
          <div className="flex items-center justify-between">
            <p className="font-semibold uppercase tracking-[0.2em]">Brief snapshot</p>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(summary)}
              className="rounded-full border border-emerald-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 transition hover:bg-emerald-100"
            >
              Copy
            </button>
          </div>
          <pre className="mt-4 whitespace-pre-wrap break-words font-mono text-xs leading-relaxed">
            {summary || "Add details and click Generate summary."}
          </pre>
        </div>
      ) : null}
    </section>
  );
}
