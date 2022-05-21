/* eslint-disable no-unused-vars */

class EffectType {
	/**
	 *
	 * @param {string} name - Name of effect type.
	 * @param {string} unitOfValue - Unit of value.
	 * @param {string} category
	 * @param {string} icon
	 */
	constructor(name, unitOfValue, category, icon) {
		if (
			!(unitOfValue === '%') ||
			!(unitOfValue === '%') ||
			!(unitOfValue === '%')
		) {
			console.error(new Error('Please provide a proper unit of value.'));
			return;
		}
		this.name = name;
		this.unitOfValue = unitOfValue;
		this.category = category;
		this.icon = icon;
	}
}

class Effect {
	constructor({ effectType, value }) {
		this.effectType = effectType;
		this.value = value;
	}

	get formattedValue() {
		let sign;
		switch (this.effectType.unitOfValue) {
			case '%':
				return `${this.value.toFixed(2)}%`;
			case '+':
				switch (Math.sign(this.value)) {
					case 1:
						sign = '+';
						break;
					case -1:
						sign = '-';
						break;
					case 0:
						sign = '';
				}
				return `${sign}${this.value}`;
			default:
				return this.value;
		}
	}
}

class Augment {
	constructor({ name, slot, effects, battlePower, level, variant, region }) {
		if (!name || !slot || !effects || !battlePower.toString()) {
			console.error(new Error('Please provide proper Augment data.'));
		}
		this.name = name;
		this.slot = slot;
		this.effects = effects;
		this.battlePower = battlePower;
		this.level = level ? level : null;
		this.variant = variant ? variant : null;
		this.region = region ? region : null;
	}
}

class Slot {
	constructor(name) {
		this.name = name;
	}
}

const effectTypes = [new EffectType({})];
