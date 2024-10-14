import {  } from "../../../../lib/index";

import { NextResponse } from 'next/server';
import {loadAndExtractFromHTML} from '../../../../lib/index';

export async function GET() {
  try {
    const data = await loadAndExtractFromHTML();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to scrape data' }, { status: 500 });
  }
}