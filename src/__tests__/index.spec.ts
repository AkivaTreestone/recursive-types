import { helloWorld } from '../index';

describe("does log", () => {
	jest.clearAllMocks();

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("logs \"IT WORKS\"", () => {
		const consoleLog = jest.spyOn(global.console, 'log');
		consoleLog.mockImplementationOnce(() => undefined);
		helloWorld();
		expect(consoleLog).nthCalledWith(1, "IT WORKS");
	});
});